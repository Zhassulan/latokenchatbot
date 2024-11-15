package com.home.latokenaibot.service;

import com.home.latokenaibot.model.ChatMessage;
import com.home.latokenaibot.model.ChatResponse;

public interface ChatService {

    ChatResponse send(ChatMessage chatMessage);
}
