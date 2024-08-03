package com.example.watchlist;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.exception.ResourceNotFoundException;
import com.example.room.Room;
import com.example.room.RoomRepository;
import com.example.user.User;
import com.example.user.UserRepository;

import jakarta.transaction.Transactional;

@Service
public class WatchListServiceImpl implements WatchListService {
    @Autowired
    private WatchListRepository watchlistRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoomRepository roomRepository;

    @Override
    @Transactional
    public String toggleWatchlist(String userEmail, Long roomId) {
        User user = userRepository.findByUserEmail(userEmail);
        Room room = roomRepository.findById(roomId)
                .orElseThrow(() -> new ResourceNotFoundException("Room not found with given id: "));

        Watchlist existingEntry = watchlistRepository.findByUserAndRoom(user, room);
        if (existingEntry == null) {
        Watchlist watchlist = new Watchlist(user, room);
        watchlistRepository.save(watchlist);
        return "Added to Watchlist Successfully";
        } else {
            this.watchlistRepository.delete(existingEntry);
            return "Removed from Watchlist Successfully";
        }

    }

  

    @Override
    public List<Room> getUserWatchlist(String userEmail) {
        User user = userRepository.findByUserEmail(userEmail);
        List<Watchlist> watchlistEntries = watchlistRepository.findByUser(user);
        return watchlistEntries.stream().map(Watchlist::getRoom).collect(Collectors.toList());
    }
}