package com.example.user;

import java.util.List;

import com.example.room.Room;
import com.example.watchlist.Watchlist;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long userId;
	@Column(nullable = false)
	private String name;
	@Column(nullable = false, unique = true)
	private String userEmail;
	@Column(nullable = false)
	@JsonIgnore
	private String userPassword;
	@Column(nullable = false)
     private Long userPhoneNumber;

	@Column(length = 5000)
	private String userProfileUrl;
	@JsonIgnore
	private String userProfilePublicId;

	@OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
	@JsonIgnore
	private List<Room> rooms;
	@OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
	@JsonIgnore
	private List<Watchlist> watchlist;

	public User() {
		// TODO Auto-generated constructor stub
	}



	public User(String name, String userEmail, String userPassword, Long userPhoneNumber, String userProfileUrl,
			String userProfilePublicId
			// List<Room> rooms, List<Watchlist> watchlist
			) {
		this.name = name;
		this.userEmail = userEmail;
		this.userPassword = userPassword;
		this.userPhoneNumber = userPhoneNumber;
		this.userProfileUrl = userProfileUrl;
		this.userProfilePublicId = userProfilePublicId;
		// this.rooms = rooms;
		// this.watchlist = watchlist;
	}



	public String getUserProfileUrl() {
		return userProfileUrl;
	}

	public void setUserProfileUrl(String userProfileUrl) {
		this.userProfileUrl = userProfileUrl;
	}

	public List<Watchlist> getWatchlist() {
		return watchlist;
	}

	public void setWatchlist(List<Watchlist> watchlist) {
		this.watchlist = watchlist;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}



	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}


	public Long getUserPhoneNumber() {
		return userPhoneNumber;
	}

	public void setUserPhoneNumber(Long userPhoneNumber) {
		this.userPhoneNumber = userPhoneNumber;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public String getUserPassword() {
		return userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	public List<Room> getRooms() {
		return rooms;
	}

	public void setRooms(List<Room> rooms) {
		this.rooms = rooms;
	}



	public String getUserProfilePublicId() {
		return userProfilePublicId;
	}



	public void setUserProfilePublicId(String userProfilePublicId) {
		this.userProfilePublicId = userProfilePublicId;
	}

}
