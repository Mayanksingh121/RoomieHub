package com.example.watchlist;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.room.Room;

@RestController
@CrossOrigin("*")
public class WatchListController {
  @Autowired
  private WatchListService watchlistService;
  @PostMapping("/add-to-watchlist")
  public ResponseEntity<Watchlist> addToWatchlist(@RequestParam String userEmail, @RequestParam Long roomId) {
      Watchlist watchlist = watchlistService.addToWatchlist(userEmail, roomId);
      return ResponseEntity.ok(watchlist);
  }

  @DeleteMapping("/delete-watchlist-item")
  public ResponseEntity<String> removeFromWatchlist(@RequestParam String userEmail, @RequestParam Long roomId) {
      watchlistService.removeFromWatchlist(userEmail, roomId);
      return ResponseEntity.ok("Successfully removed");
  }

  @GetMapping("/get-user-watchlist/{userEmail}")
  public ResponseEntity<List<Room>> getUserWatchlist(@PathVariable String userEmail) {
      List<Room> watchlist = watchlistService.getUserWatchlist(userEmail);
      return ResponseEntity.ok(watchlist);
  }
}
