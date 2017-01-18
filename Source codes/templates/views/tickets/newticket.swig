{% extends "../../layouts/default.swig" %}

{% block content %}

	<div class="container">
		<div class="panel panel-primary">
        <!-- Default panel contents -->
        <div class="panel-heading">Create a New Ticket</div>
        <div class="panel-body">
             <form class="form-horizontal custom-form" action="/createticket" method="post">
              
                        <div class="form-group">
                            <div class="col-sm-2 label-column">
                                <label for="name-input-field" class="control-label">Title </label>
                            </div>
                            <div class="col-sm-6 input-column {% if validationErrors.title %}has-error{% endif %}">
                                <input type="text" name="title" placeholder="Title of the ticket" class="form-control" value="{{form.title}}" />
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-2 label-column">
                                <label for="email-input-field" class="control-label">Description </label>
                            </div>
                            <div class="col-sm-6 input-column" {% if validationErrors.description %}has-error{% endif %}>
                                <textarea name="description" placeholder="Describe the issue" class="form-control">{{form.description}}</textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-2 label-column">
                                <label for="pawssword-input-field" class="control-label">Priority </label>
                            </div>
                            <div class="col-sm-6 input-column">
                                <select class="form-control" name="priority">
                                        <option value="Low" {% if form.priority == 'Low' %} selected{% endif %}>Low</option>
                                        <option value="Medium" {% if form.priority == 'Medium' %} selected{% endif %}>Medium</option>
                                        <option value="High" {% if form.priority == 'High' %} selected{% endif %}>High</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-2 label-column">
                                <label for="repeat-pawssword-input-field" class="control-label">Category </label>
                            </div>
                            <div class="col-sm-6 input-column">
                                <select class="form-control" name="category">
                                        <option value="Bug"  {% if form.category == 'Bug' %} selected{% endif %}>Bug</option>
                                        <option value="Feature" {% if form.category == 'Feature' %} selected{% endif %}>Feature</option>
                                        <option value="Enhancement" {% if form.category == 'Enhancement' %} selected{% endif %}>Enhancement</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-2 label-column">
                                <label for="repeat-pawssword-input-field" class="control-label">Status </label>
                            </div>
                            <div class="col-sm-6 input-column">
                                <select class="form-control" name="status">
                                        <option value="New" selected>New</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Open">Open</option>
                                        <option value="On Hold">On Hold</option>
                                        <option value="Declined">Declined</option>
                                        <option value="Closed">Closed</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-2 label-column">
                                <label for="repeat-pawssword-input-field" class="control-label">Assigned To </label>
                            </div>
                            <div class="col-sm-6 input-column">
                                <select class="form-control" name="assignedTo">
                                {% for assignUser in data.users %}
                                    <option value="{{assignUser.id}}">{{assignUser.username}}</option>
                                {% endfor %}
                                </select>
                            </div>
                        </div> 
                        <input type="submit" class="btn btn-primary submit-button" value="Create Ticket"/>
                    </form>
        </div>
 
       
        </div>
         
	</div>
{% endblock %}