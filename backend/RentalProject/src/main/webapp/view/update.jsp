<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
 <form action="/update/${6}" method="post" >
  NAme <input type="text" name="name"/>
  Department <input type="text" name="department">
<!--   id <input type="number" name="id" > -->
  <input type="submit" value="update">
 </form>

</body>
</html>