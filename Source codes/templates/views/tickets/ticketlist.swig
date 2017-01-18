{% extends "../../layouts/default.swig" %}

{% block content %}

	<div class="container">
		<div class="panel panel-primary">
        <!-- Default panel contents -->
        <div class="panel-heading">Tickets</div>
        <div class="panel-body">
            <p>These are list of tickets in the system.</p>
        </div>

        <!-- Table -->
        <table class="table  table-striped">
            {% for ticket in data.tickets.results %}
               {% include 'ticket.swig' %}
            {% endfor %}
        </table>
        <div class="panel-footer">
        <ul class="pagination">
	{% if data.tickets.totalPages > 1 %}
	
	{% if data.tickets.previous %}
	<li><a class="page-num" href="?page={{ data.tickets.previous }}">Previous</a></li>
	{% else %}
	<li><a class="page-num" href="?page=1">Previous</a></li>
	{% endif %}
	
	{% for i,p in data.tickets.pages %}
	<li><a class="page-num {% if data.tickets.currentPage == p %} active {% endif %}" href="?page={% if p == '...' %} {% if i+1 == data.tickets.totalPages %} 1 {% else %} {{ p }} {% endif %}{% else %}{{ p }}{% endif %}">{{ p }}</a></li>
	{% endfor %}
	
	{% if data.tickets.next %}
	<li><a class="page-num" href="?page={{ data.tickets.next }}">Next</a></li>
	{% else %}
	<li><a class="page-num" href="?page={{data.tickets.totalPages}}">Next</a></li>
	{% endif %} 
	
	{% endif %}
</ul>
        </div>
        </div>
         
	</div>
{% endblock %}