package com.example.room;

import java.util.List;

import com.example.user.User;
import com.example.watchlist.Watchlist;
import com.fasterxml.jackson.annotation.JsonIgnore;

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
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Getter
@Setter
@Entity
@NoArgsConstructor
// @AllArgsConstructor
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

	@OneToMany(mappedBy = "room", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
	@JsonIgnore
	private List<Watchlist> watchlists;

	@Column(columnDefinition = "BOOLEAN DEFAULT FALSE")
	private Boolean lift;
	@Column(columnDefinition = "BOOLEAN DEFAULT FALSE")
	private Boolean reservedParking;
	@Column(columnDefinition = "BOOLEAN DEFAULT FALSE")
	private Boolean security;
	@Column(columnDefinition = "BOOLEAN DEFAULT FALSE")
	private Boolean gym;
	@Column(columnDefinition = "BOOLEAN DEFAULT FALSE")
	private Boolean maintainanceStaff;
	@Column(columnDefinition = "BOOLEAN DEFAULT FALSE")
	private Boolean garden;
	@Column(columnDefinition = "BOOLEAN DEFAULT FALSE")
	private Boolean wifi;


	// public Room() {
	// 	// TODO Auto-generated constructor stub
	// }

	public Room(Long roomId, Integer numberOfBalconies, Integer bathRooms, String floorNumber, String roomArea,
			String preference, String roomImageUrl, String roomImagePublicId, String roomVideoUrl,
			String roomVideoPublicId, Double rent, Double securityDeposit, String description, String landmark,
			String state, String city, String address, FurnishedStatus furnishedStatus, User user,
			Boolean lift, Boolean reservedParking, Boolean security, Boolean gym,
			Boolean maintainanceStaff, Boolean garden, Boolean wifi) {
		this.roomId = roomId;
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
		this.lift = lift;
		this.reservedParking = reservedParking;
		this.security = security;
		this.gym = gym;
		this.maintainanceStaff = maintainanceStaff;
		this.garden = garden;
		this.wifi = wifi;
	}

	// public Boolean getLift() {
	// return lift;
	// }

	// public void setLift(Boolean lift) {
	// this.lift = lift;
	// }

	// public Boolean getReservedParking() {
	// return reservedParking;
	// }

	// public void setReservedParking(Boolean reservedParking) {
	// this.reservedParking = reservedParking;
	// }

	// public Boolean getSecurity() {
	// return security;
	// }

	// public void setSecurity(Boolean security) {
	// this.security = security;
	// }

	// public Boolean getGym() {
	// return gym;
	// }

	// public void setGym(Boolean gym) {
	// this.gym = gym;
	// }

	// public Boolean getMaintainanceStaff() {
	// return maintainanceStaff;
	// }

	// public void setMaintainanceStaff(Boolean maintainanceStaff) {
	// this.maintainanceStaff = maintainanceStaff;
	// }

	// public Boolean getGarden() {
	// return garden;
	// }

	// public void setGarden(Boolean garden) {
	// this.garden = garden;
	// }

	// public Boolean getWifi() {
	// return wifi;
	// }

	// public void setWifi(Boolean wifi) {
	// this.wifi = wifi;
	// }

	// public String getPreference() {
	// return preference;
	// }

	// public void setPreference(String preference) {
	// this.preference = preference;
	// }

	// public List<Watchlist> getWatchlists() {
	// return watchlists;
	// }

	// public void setWatchlists(List<Watchlist> watchlists) {
	// this.watchlists = watchlists;
	// }

	// public Long getRoomId() {
	// return roomId;
	// }

	// public void setRoomId(Long roomId) {
	// this.roomId = roomId;
	// }

	// public double getRent() {
	// return rent;
	// }

	// public void setRent(double rent) {
	// this.rent = rent;
	// }

	// public String getState() {
	// return state;
	// }

	// public void setState(String state) {
	// this.state = state;
	// }

	// public String getCity() {
	// return city;
	// }

	// public void setCity(String city) {
	// this.city = city;
	// }

	// public User getUser() {
	// return user;
	// }

	// public void setUser(User user) {
	// this.user = user;
	// }

	// public int getNumberOfBalconies() {
	// return numberOfBalconies;
	// }

	// public void setNumberOfBalconies(int numberOfBalconies) {
	// this.numberOfBalconies = numberOfBalconies;
	// }

	// public String getFloorNumber() {
	// return floorNumber;
	// }

	// public void setFloorNumber(String floorNumber) {
	// this.floorNumber = floorNumber;
	// }

	// public String getRoomArea() {
	// return roomArea;
	// }

	// public void setRoomArea(String roomArea) {
	// this.roomArea = roomArea;
	// }

	// public int getBathRooms() {
	// return bathRooms;
	// }

	// public void setBathRooms(int bathRooms) {
	// this.bathRooms = bathRooms;
	// }

	// public Double getSecurityDeposit() {
	// return securityDeposit;
	// }

	// public void setSecurityDeposit(Double securityDeposit) {
	// this.securityDeposit = securityDeposit;
	// }

	// public String getDescription() {
	// return description;
	// }

	// public void setDescription(String description) {
	// this.description = description;
	// }

	// public String getLandmark() {
	// return landmark;
	// }

	// public void setLandmark(String landmark) {
	// this.landmark = landmark;
	// }

	// public String getAddress() {
	// return address;
	// }

	// public void setAddress(String address) {
	// this.address = address;
	// }

	// public FurnishedStatus getFurnishedStatus() {
	// return furnishedStatus;
	// }

	// public void setFurnishedStatus(FurnishedStatus furnishedStatus) {
	// this.furnishedStatus = furnishedStatus;
	// }

	// public void setNumberOfBalconies(Integer numberOfBalconies) {
	// this.numberOfBalconies = numberOfBalconies;
	// }

	// public void setBathRooms(Integer bathRooms) {
	// this.bathRooms = bathRooms;
	// }

	// public void setRent(Double rent) {
	// this.rent = rent;
	// }

	// public String getRoomImageUrl() {
	// return roomImageUrl;
	// }

	// public void setRoomImageUrl(String roomImageUrl) {
	// this.roomImageUrl = roomImageUrl;
	// }

	// public String getRoomImagePublicId() {
	// return roomImagePublicId;
	// }

	// public void setRoomImagePublicId(String roomImagePublicId) {
	// this.roomImagePublicId = roomImagePublicId;
	// }

	// public String getRoomVideoUrl() {
	// return roomVideoUrl;
	// }

	// public void setRoomVideoUrl(String roomVideoUrl) {
	// this.roomVideoUrl = roomVideoUrl;
	// }

	// public String getRoomVideoPublicId() {
	// return roomVideoPublicId;
	// }

	// public void setRoomVideoPublicId(String roomVideoPublicId) {
	// this.roomVideoPublicId = roomVideoPublicId;
	// }

}
