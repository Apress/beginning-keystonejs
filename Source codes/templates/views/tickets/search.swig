{% extends "../../layouts/default.swig" %}

{% block content %}

	<div class="container">
		<div class="panel panel-primary">
        <!-- Default panel contents -->
        <div class="panel-heading">Search Results</div>
        <div class="panel-body">
            <p>{{data.keywords | title}} search results (Limited to 20 results)</p>
        </div>

        <!-- Table -->
        <table class="table  table-striped">
            {% for ticket in data.tickets %}
               {% include 'ticket.swig' %}
            {% endfor %}
        </table>
      
        </div>
         
	</div>
{% endblock %}