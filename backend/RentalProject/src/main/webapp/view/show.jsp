<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>

        
           <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
    <h1>Hello</h1>
 
       <a href="images/8" >click</a>
       <table>
       <c:forEach items="${allEmployees}" var="e">
        <tr>
        <th>ID</th>
         <th>Name</th>
          <th>Department</th>
        </tr>
        
        <tr>
         <td>${e.id }</td>
              <td>${e.name }</td>
                   <td>${e.dapartement }</td>
        </tr>
           </c:forEach>
        </table> 
 
</body>
</html>