package com.vlog.network.service;

import com.vlog.network.model.NetworkRequest;
import com.vlog.network.model.NetworkResponse;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Service
public class NetworkService {

    private final WebClient webClient;

    public NetworkService(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.build();
    }

    public Mono<NetworkResponse> makeNetworkRequest(NetworkRequest request) {
        long startTime = System.currentTimeMillis();

        return webClient
                .method(org.springframework.http.HttpMethod.valueOf(request.getMethod()))
                .uri(request.getUrl())
                .bodyValue(request.getBody() != null ? request.getBody() : "")
                .retrieve()
                .bodyToMono(String.class)
                .map(responseBody -> {
                    long responseTime = System.currentTimeMillis() - startTime;
                    return new NetworkResponse(200, responseBody, responseTime, true, null);
                })
                .onErrorResume(error -> {
                    long responseTime = System.currentTimeMillis() - startTime;
                    return Mono.just(new NetworkResponse(
                            500,
                            null,
                            responseTime,
                            false,
                            error.getMessage()
                    ));
                });
    }
}
