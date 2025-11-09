package com.vlog.network.service;

import com.vlog.network.model.User;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@Service
public class UserService {

    private final List<User> users = new ArrayList<>();
    private final AtomicLong idCounter = new AtomicLong(1);

    public UserService() {
        // Initialize with some sample users
        users.add(new User(idCounter.getAndIncrement(), "John Doe", "john@example.com"));
        users.add(new User(idCounter.getAndIncrement(), "Jane Smith", "jane@example.com"));
        users.add(new User(idCounter.getAndIncrement(), "Bob Johnson", "bob@example.com"));
    }

    public Flux<User> getAllUsers() {
        return Flux.fromIterable(users);
    }

    public Mono<User> getUserById(Long id) {
        return Mono.justOrEmpty(
                users.stream()
                        .filter(user -> user.getId().equals(id))
                        .findFirst()
        );
    }

    public Mono<User> createUser(User user) {
        user.setId(idCounter.getAndIncrement());
        users.add(user);
        return Mono.just(user);
    }

    public Mono<User> updateUser(Long id, User updatedUser) {
        return Mono.justOrEmpty(
                users.stream()
                        .filter(user -> user.getId().equals(id))
                        .findFirst()
                        .map(user -> {
                            user.setName(updatedUser.getName());
                            user.setEmail(updatedUser.getEmail());
                            return user;
                        })
        );
    }

    public Mono<Void> deleteUser(Long id) {
        users.removeIf(user -> user.getId().equals(id));
        return Mono.empty();
    }
}
