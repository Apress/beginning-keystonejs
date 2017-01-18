{% extends "../../layouts/default.swig" %}

{% block content %}

	<div class="container">
    {#
        This is a comment.
    #}
		<div class="panel panel-primary">
        <!-- Default panel contents -->
        <div class="panel-heading">Ticket details - {{data.ticket.title}}
        </div>
        <div class="panel-body">
            <span class="label label-info pull-right">{{data.ticket.status}}</span>
            <p>{{data.ticket.description}}</p>
        </div>
        <ul class="ticket-meta">
        <li>
            <small>Status</small><a href="" rel="tag">{{data.ticket.status}}</a>
        </li>
        <li>
            <small>Priority</small><a href="" rel="tag">{{data.ticket.priority}}</a>
        </li>
        <li>
            <small>Category</small><a href="" rel="tag">{{data.ticket.category}}</a>
        </li>
        <li>
            <small>Last Updated</small>
            <abbr class="last-updated">{{data.ticket._.createdAt.format('Do MMMM YYYY')}}</abbr>
        </li>
        </ul>
        <div class="panel-footer"></div>
        </div>
         
	</div>
{% endblock %}