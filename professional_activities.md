---
title: "Professional Activities"
layout: default
fname: professional_activities
---

Committee, Board, etc. Memberships
----------------------------------

-	**1997-2021**: [IW3C2](http://www.iw3c2.org/) (International World Wide Web Conference Committee)
-	**2016-2018**: Steering Committee of the [“Annotating All Knowledge”](https://hypothes.is/annotating-all-knowledge/) coalition
-	**2016-2018**: Advisory Board of [Force11](http://www.force11.org) (Future of Research Communications and e-Scholarship)
-	**2015**: [ORCID](http://www.orcid.org/) Technical Steering Board
-	**2015**: Advisory Board of the [Summer Schools on Ontology Engineering and the Semantic Web](http://www.orcid.org/) series
-	**2013-2015**: Expert Steering Group of the [SemaGrow](http://semagrow.eu/) EU project
-	**2011-2015**: Board of Directors of [Force11](http://www.force11.org) (Future of Research Communications and e-Scholarship)
-	**2003-2015**: [IFIP TC6 Working Group on Internet Applications Engineering](http://www.ifip.tu-graz.ac.at/TC6/)
-	**2007-2014**: [ISWSA](http://www.iswsa.org/) (Semantic Web Science Association)
-	**2006-2010**: Peer Review Panel, UK [EPSRC](http://www.epsrc.ac.uk/) (Engineering and Physical Sciences Research Council)
-	**1986-2010**: Editorial Board, [Computer Graphics Forum](http://www.eg.org/EG/Publications/CGF)
-	**2005-2009**: [Subcommittee on Electronic Publishing, European Mathematical Society](http://www.emis.de/committees.html#ep)
-	**2003-2007**: Steering Committee, [Stichting Bartiméus Accessibility](http://www.accessibility.nl/)
-	**1999-2004**: Editorial Board, Springer Book Series on Information Visualization
-	**2004-2005**: Review board for the EU 5th Framework [SPIRIT](http://www.geo-spirit.org/), [SCULPTEUR](http://www.sculpteurweb.org/), and SPACEMANTIX projects
-	**1985-2002**: Executive Committee and Executive Board, [Eurographics Association](http://www.eg.org/)
-	**1999-2001**: Steering Committee, Amsterdam New Media Association
-	**1994-2000**: [International Standards Organization, ISO/IEC JTC1 SC24 Committee](http://www.bsi.org.uk/sc24/), head of the Dutch National Delegation
-	**1995-1997**: EEC [ITEA](http://www.itea.tm.fr/) (Information Technology European Award) Evaluation Group
-	**1994-1995**: Review Board, EU ESPRIT III OMHEGA Project
-	**1989-1991**: Editorial Advisory Board of the “Computer Graphics Standard Reference Series” by Butterworth Scientific Ltd.
-	**1984-1986**: [International Standards Organization, ISO TC97/SC24 WG2 Committee](http://www.bsi.org.uk/sc24/), head of the Hungarian National Delegation


Conference organizations, program committee membership, etc.
--------------------------------------------------------------

<ul>
    {% for act in site.data.social %}
    <li>
    {% if act.start != act.end %}
        <strong>{{ act.start }}-{{ act.end }}:</strong> 
    {% else %}
        <strong>{{ act.start }}:</strong>
    {% endif %}
    {% if act.href %}
        <a href="{{ act.href }}">{{ act.label }}</a>, 
    {% else %}
        {{ act.label }}, 
    {% endif%}
    {{ act.where }},
    {% if act["act-type"] == "conference programme committee" or act["act-type"] == "conference organization" or act["act-type"] == "advisory board" %}
        member of the {{ act["act-type"]}}.
    {% else %}
        {{ act["act-type"] }}
    {% endif %}
    </li>
    {% endfor %}

</ul>
