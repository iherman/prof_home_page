---
title: "Public Presentations"
layout: default
fname: presentations
---

The presentations are listed from 2004 onward only.

<div>
{% assign by_years = site.data.presentations | group_by: "year" %}

{% for year in by_years %}
    <h2>{{ year["name"] }} </h2>

    <ol>
    {% for item in year["items"] %}
    <li>
        <em>
        “{{ item.title }}”{% if item.titleEnglish %} ({{ item.titleEnglish }}){% endif %}</em>
        {% if item.eventURI %}
            At “<a href="{{ item.eventURI }}">{{ item.event }}{% if item.eventEnglish %} ({{ item.eventEnglish }}){% endif %},</a>”
        {% elsif item.event %}
            At “{{ item.event }}{% if item.eventEnglish %} ({{ item.eventEnglish }}){% endif %},”
        {% elsif item.organizer %}
            Organized by {{ item.organizer }},
        {% endif %}
        {{ item.city }}, {{ item.country}}, {{ item.date }}.
        {% if item.slides %} The <a href="{{ item.slides }}">presentations slides</a> are also available on-line. {% endif %}
    </li>
    {% endfor %}
    </ol>
{% endfor %}
</div>
