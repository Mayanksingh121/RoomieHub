package com.example.roommate;

import java.time.LocalDate;

import com.example.user.User;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
public class RoomMate {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(nullable = false)
	private Integer numberOfBalconies;
	@Column(nullable = false)
	private Integer bathRooms;
	@Column(nullable = false)
	private String floorNumber;
	private Integer age;
	private String occupation;
	private String preference;

	@Column(length = 5000, nullable = false)
	private String roomImageUrl;
	private String roomImagePublicId;
	@Column(length = 5000, nullable = false)
	private String roomVideoUrl;
	@Column(nullable = false)
	private String roomVideoPublicId;
	@Column(nullable = false)
	private Double budget;
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

	@Temporal(TemporalType.DATE)
	private LocalDate availableFrom;
	@ManyToOne
	@JoinColumn(name = "user_id", nullable = false)
	// @JsonIgnore
	private User user;

	public RoomMate() {
	}

	public RoomMate(Integer numberOfBalconies, Integer bathRooms, String floorNumber, Integer age, String occupation,
			String preference, String roomImageUrl, String roomImagePublicId, String roomVideoUrl,
			String roomVideoPublicId, Double budget, String description, String landmark, String state, String city,
			String address, LocalDate availableFrom, User user) {
		this.numberOfBalconies = numberOfBalconies;
		this.bathRooms = bathRooms;
		this.floorNumber = floorNumber;
		this.age = age;
		this.occupation = occupation;
		this.preference = preference;
		this.roomImageUrl = roomImageUrl;
		this.roomImagePublicId = roomImagePublicId;
		this.roomVideoUrl = roomVideoUrl;
		this.roomVideoPublicId = roomVideoPublicId;
		this.budget = budget;
		this.description = description;
		this.landmark = landmark;
		this.state = state;
		this.city = city;
		this.address = address;
		this.availableFrom = availableFrom;
		this.user = user;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Integer getNumberOfBalconies() {
		return numberOfBalconies;
	}

	public void setNumberOfBalconies(Integer numberOfBalconies) {
		this.numberOfBalconies = numberOfBalconies;
	}

	public Integer getBathRooms() {
		return bathRooms;
	}

	public void setBathRooms(Integer bathRooms) {
		this.bathRooms = bathRooms;
	}

	public String getFloorNumber() {
		return floorNumber;
	}

	public void setFloorNumber(String floorNumber) {
		this.floorNumber = floorNumber;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public String getOccupation() {
		return occupation;
	}

	public void setOccupation(String occupation) {
		this.occupation = occupation;
	}

	public String getPreference() {
		return preference;
	}

	public void setPreference(String preference) {
		this.preference = preference;
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

	public Double getBudget() {
		return budget;
	}

	public void setBudget(Double budget) {
		this.budget = budget;
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

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public LocalDate getAvailableFrom() {
		return availableFrom;
	}

	public void setAvailableFrom(LocalDate availableFrom) {
		this.availableFrom = availableFrom;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

}
