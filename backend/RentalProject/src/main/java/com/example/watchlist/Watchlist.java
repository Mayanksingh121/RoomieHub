package com.example.watchlist;

import com.example.room.Room;
import com.example.user.User;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "watchlist")
public class Watchlist {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "user_id")
	  @JsonIgnore
	private User user;

	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "room_id")
	@JsonIgnore
	private Room room;

	public Watchlist() {
		// TODO Auto-generated constructor stub
	}

	public Watchlist(User user, Room room) {
		super();
		this.user = user;
		this.room = room;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Room getRoom() {
		return room;
	}

	public void setRoom(Room room) {
		this.room = room;
	}

}
