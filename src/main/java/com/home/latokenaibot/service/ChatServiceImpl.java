package com.home.latokenaibot.service;

import com.home.latokenaibot.model.ChatMessage;
import com.home.latokenaibot.model.ChatResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ChatServiceImpl implements InitializingBean, ChatService {

    private final ChatClient.Builder chatClientBuilder;
    private ChatClient chatClient;

    @Override
    public void afterPropertiesSet() {
        chatClient = chatClientBuilder.build();
    }

    @Override
    public ChatResponse send(ChatMessage chatMessage) {
        return ChatResponse.builder()
                .response(chatClient.prompt(chatMessage.getMessage()).call().content())
                .build();
    }
}
