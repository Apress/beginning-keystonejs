{% extends "../../layouts/default.swig" %}

{% block content %}

<div class="container">
    <div class="panel panel-primary">
    <!-- Default panel contents -->
    <div class="panel-heading">Reset My Password</div>
    <div class="panel-body">

    <div class="col-md-4">
    <form role="form" action="/resetpassword" method="post">          
    <input type='hidden' name='resetkey' value='{{key}}'/>
 
    <input type='hidden' name='_csrf' value='{{csrf_token_value}}'/>
    <div class="form-group">
        <label for="password" class="control-label">Password:</label>
        <div class="input-icon">  
        <input class="form-control email" id="password" name="password" type="password" value="">
        </div>
    </div>
    <div class="form-group">
        <label for="password_confirm" class="control-label">Confirm Password:</label>
        <div class="input-icon">  
        <input class="form-control" id="password_confirm" name="password_confirm" type="password" value="">
        </div>
    </div>
    
    <div class="form-group">
        <input type="submit" class="btn btn-primary " value="Reset">    
    </div>
    </form>
    </div>
    </div>
    </div>
</div>
 {% endblock %}