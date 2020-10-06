---
title: "Publications"
layout: publ
fname: software
---

* TOC
{:toc}

{% assign categories = "Conference Papers, Journal Articles, Book Chapters, Books, PhD Thesis, Standardization Documents, Technical Reports, Software" | split: ", " %}

{% assign number = 0 %}
{% for category in categories %}
    {% assign number = number | plus: site.data.publist[category].size %}
{% endfor %}

The complete list of the {{ number }} entries, with more details, is also available in <a href="data/publist.json">JSON</a> and <a href="data/publist.bib">BiBTeX</a> formats.

<div>
{% for category in categories %}
    <h2> {{ category }} </h2>

    <ol>
    {% for pub in site.data.publist[category] %}
        <li>
            <em>“{{ pub.label }}”;</em> 
            {% if pub.author %} {{ pub.author | array_to_sentence_string }}. {% endif %}
            {% if pub.booktitle %} In: “{{ pub.booktitle }}”, {% endif %}
            {% if pub.editor %} {{ pub.editor | array_to_sentence_string }} (Eds). {% endif %}
            {% if pub.journal %}{{ pub.journal }} ({{ pub.volume }}), {% endif %}
            {% if pub.publisher %}{{ pub.publisher }}, {% endif %}
            {% if pub.institution %}{{ pub.institution }}, {% endif %}
            {% if pub.school %}{{ pub.school }}, {% endif %}
            ({{ pub.year }}).
            {% if pub.url %} An <a href="{{ pub.url }}">online version</a> is also available. {% endif %}
        </li>
    {% endfor %}
    </ol>
{% endfor %}
</div>
