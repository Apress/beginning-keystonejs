{% extends "../layouts/default.swig" %}

{% block content %}
	<div class="container">
		<div class="jumbotron">
			<h2>{% if user %} Hello {{ user.name.first }} {{ user.name.last }}! {% endif %} Welcome to IncTicket</h2>
		 		<hr>
			{% if user  %}
				<p>
					<a href="/createticket" class="btn btn-lg btn-primary">Create a Ticket</a>
				</p>
			{% else %}
			 	<p>
					<a href="/join" style="margin-right: 10px" class="btn btn-lg btn-primary">Create An Account</a>
					to use the IncTicket system.
				</p>
			{% endif %}
			<hr>
			<p>
				To view a <a href="/tickets" target="_blank">List of Tickets</a> Click here.
			</p>
		</div>
	</div>
{% endblock %}
