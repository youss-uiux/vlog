package com.vlog.network.model;

import jakarta.validation.constraints.NotBlank;

public class NetworkRequest {
    @NotBlank(message = "URL is required")
    private String url;
    
    private String method = "GET";
    private String body;

    public NetworkRequest() {
    }

    public NetworkRequest(String url, String method, String body) {
        this.url = url;
        this.method = method;
        this.body = body;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getMethod() {
        return method;
    }

    public void setMethod(String method) {
        this.method = method;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }
}
