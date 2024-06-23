package com.example.watchlist;

import java.util.List;

import com.example.room.Room;

public interface WatchListService {
	   public Watchlist addToWatchlist(String userEmail, Long roomId);
	   public void removeFromWatchlist(String userEmail, Long roomId);
	   public List<Room> getUserWatchlist(String userEmail);
}
