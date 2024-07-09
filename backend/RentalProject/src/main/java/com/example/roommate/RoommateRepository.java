package com.example.roommate;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoommateRepository extends JpaRepository<RoomMate, Long> {

}
