<tr>
               <td>
                <div class=' col-md-1'>
                    <span class="label label-info pull-right">{{ticket.status}}</span>
                </div>
                
                 <a href='{{ticket.url}}'><b>{{ticket.title |capitalize}}</b><a>
                
                 <ul class="ticket-meta">
	               <li>&nbsp;</li>
                    <li>
                        <small>Status</small><a href="" rel="tag">{{ticket.status}}</a>
                    </li>
                    <li>
                        <small>Priority</small><a href="" rel="tag">{{ticket.priority}}</a>
                    </li>
                    <li>
                        <small>Category</small><a href="" rel="tag">{{ticket.category}}</a>
                    </li>
                    <li>
		                <small>Last Updated</small>
		                <abbr class="last-updated">{{ticket._.createdAt.format('Do MMMM YYYY')}}</abbr>
	                </li>
			      </ul>
               </td>
               </tr>