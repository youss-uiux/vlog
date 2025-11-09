package com.vlog.network.model;

public class NetworkResponse {
    private int statusCode;
    private String body;
    private long responseTime;
    private boolean success;
    private String error;

    public NetworkResponse() {
    }

    public NetworkResponse(int statusCode, String body, long responseTime, boolean success, String error) {
        this.statusCode = statusCode;
        this.body = body;
        this.responseTime = responseTime;
        this.success = success;
        this.error = error;
    }

    public int getStatusCode() {
        return statusCode;
    }

    public void setStatusCode(int statusCode) {
        this.statusCode = statusCode;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public long getResponseTime() {
        return responseTime;
    }

    public void setResponseTime(long responseTime) {
        this.responseTime = responseTime;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }
}
