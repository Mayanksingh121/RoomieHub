package com.example.room;

import java.util.List;

import com.example.roommate.RoomMate;
import com.example.user.User;
import com.example.watchlist.Watchlist;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class Room {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long roomId;
	@Column(nullable = false)
	private Integer numberOfBalconies;
	@Column(nullable = false)
	private Integer bathRooms;
	@Column(nullable = false)
	private String floorNumber;
	@Column(nullable = false)
	private String roomArea;
	private String preference;

	@Column(length = 5000, nullable = false)
	private String roomImageUrl;
	private String roomImagePublicId;
	@Column(length = 5000, nullable = false)
	private String roomVideoUrl;
	@Column(nullable = false)
	private String roomVideoPublicId;
	@Column(nullable = false)
	private Double rent;
	private Double securityDeposit;
	@Column(length = 65535)
	private String description;
	@Column(nullable = false)
	private String landmark;
	@Column(nullable = false)
	private String state;
	@Column(nullable = false)
	private String city;
	@Column(nullable = false)
	private String address;
	@Column(nullable = false)
	@Enumerated(EnumType.STRING)
	private FurnishedStatus furnishedStatus;

	@ManyToOne
	@JoinColumn(name = "user_id", nullable = true)
	private User user;

	@OneToMany(mappedBy = "room",fetch = FetchType.LAZY,cascade = CascadeType.ALL)
	private List<Watchlist> watchlists;

	public Room() {
		// TODO Auto-generated constructor stub
	}



	public Room(Integer numberOfBalconies, Integer bathRooms, String floorNumber, String roomArea, String preference,
			String roomImageUrl, String roomImagePublicId, String roomVideoUrl, String roomVideoPublicId, Double rent,
			Double securityDeposit, String description, String landmark, String state, String city, String address,
			FurnishedStatus furnishedStatus, User user) {
		this.numberOfBalconies = numberOfBalconies;
		this.bathRooms = bathRooms;
		this.floorNumber = floorNumber;
		this.roomArea = roomArea;
		this.preference = preference;
		this.roomImageUrl = roomImageUrl;
		this.roomImagePublicId = roomImagePublicId;
		this.roomVideoUrl = roomVideoUrl;
		this.roomVideoPublicId = roomVideoPublicId;
		this.rent = rent;
		this.securityDeposit = securityDeposit;
		this.description = description;
		this.landmark = landmark;
		this.state = state;
		this.city = city;
		this.address = address;
		this.furnishedStatus = furnishedStatus;
		this.user = user;
		// this.watchlists = watchlists;
	}



	public String getPreference() {
		return preference;
	}

	public void setPreference(String preference) {
		this.preference = preference;
	}

	public List<Watchlist> getWatchlists() {
		return watchlists;
	}

	public void setWatchlists(List<Watchlist> watchlists) {
		this.watchlists = watchlists;
	}

	public Long getRoomId() {
		return roomId;
	}

	public void setRoomId(Long roomId) {
		this.roomId = roomId;
	}

	public double getRent() {
		return rent;
	}

	public void setRent(double rent) {
		this.rent = rent;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public int getNumberOfBalconies() {
		return numberOfBalconies;
	}

	public void setNumberOfBalconies(int numberOfBalconies) {
		this.numberOfBalconies = numberOfBalconies;
	}

	public String getFloorNumber() {
		return floorNumber;
	}

	public void setFloorNumber(String floorNumber) {
		this.floorNumber = floorNumber;
	}

	public String getRoomArea() {
		return roomArea;
	}

	public void setRoomArea(String roomArea) {
		this.roomArea = roomArea;
	}



	public int getBathRooms() {
		return bathRooms;
	}

	public void setBathRooms(int bathRooms) {
		this.bathRooms = bathRooms;
	}


	public Double getSecurityDeposit() {
		return securityDeposit;
	}

	public void setSecurityDeposit(Double securityDeposit) {
		this.securityDeposit = securityDeposit;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getLandmark() {
		return landmark;
	}

	public void setLandmark(String landmark) {
		this.landmark = landmark;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public FurnishedStatus getFurnishedStatus() {
		return furnishedStatus;
	}

	public void setFurnishedStatus(FurnishedStatus furnishedStatus) {
		this.furnishedStatus = furnishedStatus;
	}

	public void setNumberOfBalconies(Integer numberOfBalconies) {
		this.numberOfBalconies = numberOfBalconies;
	}

	public void setBathRooms(Integer bathRooms) {
		this.bathRooms = bathRooms;
	}

	public void setRent(Double rent) {
		this.rent = rent;
	}

	public String getRoomImageUrl() {
		return roomImageUrl;
	}

	public void setRoomImageUrl(String roomImageUrl) {
		this.roomImageUrl = roomImageUrl;
	}

	public String getRoomImagePublicId() {
		return roomImagePublicId;
	}

	public void setRoomImagePublicId(String roomImagePublicId) {
		this.roomImagePublicId = roomImagePublicId;
	}

	public String getRoomVideoUrl() {
		return roomVideoUrl;
	}

	public void setRoomVideoUrl(String roomVideoUrl) {
		this.roomVideoUrl = roomVideoUrl;
	}

	public String getRoomVideoPublicId() {
		return roomVideoPublicId;
	}

	public void setRoomVideoPublicId(String roomVideoPublicId) {
		this.roomVideoPublicId = roomVideoPublicId;
	}


}
