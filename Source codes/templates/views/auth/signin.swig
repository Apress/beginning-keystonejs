{% extends "../../layouts/default.swig" %}

{% block content %}

<div class="container">
    <div class="panel panel-primary">
    <!-- Default panel contents -->
    <div class="panel-heading">Login to IncTicket</div>
    <div class="panel-body">

    <div class="col-md-4">
    <form role="form" action="/signin" method="post">
     <div class="form-group">
        <label for="sender-email" class="control-label">Email address:</label>
        <div class="input-icon">  
        <input class="form-control email" id="signin-email" placeholder="you@mail.com" name="email" type="email" value="">
        </div>
    </div>
    <div class="form-group">
        <label for="user-pass" class="control-label">Password:</label>
        <div class="input-icon"> 
        <input type="password" class="form-control" placeholder="Password" name="password" id="password">
        </div>
    </div>
    <div class="form-group">
        <input type="submit" class="btn btn-primary " value="Login">    <br/>
        <a href='/forgotpassword'>Forgot My Password!</a>
    </div>
    </form>
    </div>
    </div>
    </div>
</div>
 {% endblock %}