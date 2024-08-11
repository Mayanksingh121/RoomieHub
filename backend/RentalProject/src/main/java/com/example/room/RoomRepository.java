package com.example.room;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomRepository extends JpaRepository<Room, Long> {
	List<Room> findByUserUserId(Long userId);
	List<Room> findByUserUserEmail(String userEmail);
}


