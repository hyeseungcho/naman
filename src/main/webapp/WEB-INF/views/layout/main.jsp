<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>restaurant</title>
	<tiles:insertAttribute name="asset"></tiles:insertAttribute>
</head>
<body>
    <main class="pg-main">
    <!-- /* <div id="headerContainer">
       
    </div> */ -->

    <article class="contents main-padding">

		<tiles:insertAttribute name="header"></tiles:insertAttribute>
		<tiles:insertAttribute name="content"></tiles:insertAttribute>	
		</article>
	</main>



</body>
</html>