<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%--      <%@page isELIgnored="false" %> 
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
 --%><!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
 <form action="/add-user" method="post" enctype="multipart/form-data">
  NAme <input type="text" name="userName"/>
  Email <input type="text" name="userEmail">
    Password <input type="password" name="userPassword">
  Profile <input type="file" name="userProfile" >
  <input type="submit" value="submit">
 </form>
 <a href="show">List of employees</a>
 <a  href="/showImg/13"  >show picture</a>
  <a  href="/images/12"  >show picture1</a>
</body>
</html>