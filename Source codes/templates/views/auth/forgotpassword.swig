{% extends "../../layouts/default.swig" %}

{% block content %}

<div class="container">
    <div class="panel panel-primary">
    <!-- Default panel contents -->
    <div class="panel-heading">Forgot Password?</div>
    <div class="panel-body">

    <div class="col-md-4">
    <form role="form" action="/forgotpassword" method="post">           
    <div class="form-group">
        <label for="email" class="control-label">Email address:</label>
        <div class="input-icon">  
        <input class="form-control email" id="email" placeholder="you@mail.com" name="email" type="email" value="">
        </div>
        
    </div>
    
    <div class="form-group">
        <input type="submit" class="btn btn-primary " value="Reset My Password">    
    </div>
    </form>
    </div>
    </div>
    </div>
</div>
 {% endblock %}