package com.home.latokenaibot.controller;

import com.home.latokenaibot.model.ChatMessage;
import com.home.latokenaibot.model.ChatResponse;
import com.home.latokenaibot.service.ChatService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static com.home.latokenaibot.config.AppConfig.CONTENT_TYPE;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/api/v1/chat", produces = CONTENT_TYPE)
public class ChatController {

    private final ChatService chatService;

    /*@GetMapping("/")
    public String homePage(Model model) {
        model.addAttribute("appName", "dsaf");
        return "home";
    }*/

    @PostMapping("/send")
    public ChatResponse sendMessage(@RequestBody ChatMessage chatMessage) {
        return chatService.send(chatMessage);
    }
}
