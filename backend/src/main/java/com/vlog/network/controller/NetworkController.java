package com.vlog.network.controller;

import com.vlog.network.model.NetworkRequest;
import com.vlog.network.model.NetworkResponse;
import com.vlog.network.service.NetworkService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/network")
public class NetworkController {

    private final NetworkService networkService;

    public NetworkController(NetworkService networkService) {
        this.networkService = networkService;
    }

    @PostMapping("/request")
    public Mono<ResponseEntity<NetworkResponse>> makeNetworkRequest(
            @Valid @RequestBody NetworkRequest request) {
        return networkService.makeNetworkRequest(request)
                .map(response -> ResponseEntity.ok(response));
    }

    @GetMapping("/health")
    public Mono<ResponseEntity<String>> healthCheck() {
        return Mono.just(ResponseEntity.ok("Network service is running"));
    }
}
