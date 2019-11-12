---
layout:           page3
date:             2019-11-02 17:12:00 +1000
last_modified_at: 2019-11-02 17:12:00 +1000
redirect_from:    /politics/australia_day/
permalink:        /australia-day/
title:            Possible dates for Australia Day
---

<table cellspacing="0">
	<colgroup width="110"></colgroup>
	<tr>
		<td style="background-color: #55308D; font-weight: bold;"><font color="#FFFFFF">Date</font></td>
		<td style="background-color: #55308D; font-weight: bold;"><font color="#FFFFFF">Significance</font></td>
		<td style="background-color: #55308D; font-weight: bold;"><font color="#FFFFFF">Pros as Australia Day</font></td>
		<td style="background-color: #55308D; font-weight: bold;"><font color="#FFFFFF">Cons as Australia Day</font></td>
	</tr>
	{% for row in site.data.australia-day-proposals.body %}
	<tr>
		<td height="79" valign=middle style="background-color: #{{ row.bg }};" sdval="43466" sdnum="3081;0;D MMM">{% if row.colour %}<font color="#{{ row.colour }}">{% else %}<font color="#000000">{% endif %}{{ row.date }}</font></td>
		<td valign=middle style="background-color: #{{ row.bg }};">{% if row.colour %}<font color="#{{ row.colour }}">{% else %}<font color="#000000">{% endif %}{{ row.sig }}</font></td>
		<td valign=middle style="background-color: #{{ row.bg }};">{% if row.colour %}<font color="#{{ row.colour }}">{% else %}<font color="#000000">{% endif %}{{ row.sig }}</font></td>
		<td valign=middle style="background-color: #{{ row.bg }};">{% if row.colour %}<font color="#{{ row.colour }}">{% else %}<font color="#000000">{% endif %}{{ row.cons }}</font></td>
	</tr>
	{% endfor %}
	<tr>
		<td colspan=4>
			<b>Legend</b>:
			<ol>
				<li>Those days with a <span style="background-color: #29F2FF; padding: 5px;">cyan</span> background are those of general constitutional significance.</li>
				<li>The <span style="background-color: #5EB91E; padding: 5px;">green</span> background is for the day that is presently used as Australia Day, 26 January.</li>
				<li>The <span style="background-color: #3465A4; color:white; padding: 5px;">blue</span> background is for days of general democratic significance.</li>
				<li>The <span style="background-color: #FF6D6D; padding: 5px;">red</span> background is for days of indigenous significance.</li>
				<li>The <span style="background-color: #FFFF38; padding: 5px;">yellow</span> background is for other days.</li>
			</ol>
		</td>
	</tr>
</table>