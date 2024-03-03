---
title: "Software Developments"
layout: default
fname: programs
---

(Obviously, these are only the major software developments, and only of the past 15-20 years; previous projects have no trace on the Web…)

* [rdfjs-c14n](https://github.com/iherman/rdfjs-c14n), a standard-conform implementation of the [W3C RDF Dataset Canonicalization (RDFC-1.0)](https://www.w3.org/TR/rdf-canon/) standard, written in TypeScript.
* [yml2vocab](https://github.com/w3c/yml2vocab), a package used to generate RDFS vocabulary files from YAML. It is not a complete solution for authoring vocabularies, it is meant for simple vocabularies and to be used by people who are not RDF vocabulary experts. It generates the vocabularies in Turtle, JSON-LD, and in HTMML+RDFa. Written in TypeScript.
* [r2epub](https://github.com/iherman/r2epub/), program to convert W3C documents, produced by [ReSpec](https://github.com/w3c/respec), to EPUB 3.2. A [public service](https://iherman.github.io/r2epub/convert.html) is also available for that purpose, using this module.
* [SPARQLWrapper](http://sparql-wrapper.sourceforge.net/), a wrapper around a [SPARQL](http://www.w3.org/TR/rdf-sparql-query/) service for Python. Moved to SourceForge, under the watchful eyes of Sergio Fernandez and Carlos Tejo, who are now maintaining the package. It has also become part of the standard Debian distribution.
* [pyRdfa](https://github.com/RDFLib/pyrdfa3), an [RDFa 1.1](http://www.w3.org/TR/rdfa-primer/) distiller on top of Python’s [RDFLib package](http://rdflib.net/). The module is also deployed as an online [RDFa distiller service](http://www.w3.org/2012/pyRdfa/). This [module](https://pypi.org/project/pyRdfa3/) is part of the collection of the packages usable with RDFLib.
* [pyMicrodata](https://github.com/RDFLib/pymicrodata), an [Microdata](http://www.w3.org/TR/2012/NOTE-microdata-rdf-20120308/) to RDF software on top of Python’s [RDFLib package](http://rdflib.net/). The module is also deployed as an online Microdata to RDF distiller service. This module is part of the collection of the packages usable with RDFLib.
* [SPARQL](http://www.w3.org/TR/rdf-sparql-query/) [engine for Python](http://dev.w3.org/cvsweb/%7Echeckout%7E/2004/PythonLib-IH/Doc/sparqlDesc.html), included in [RDFLib package](http://rdflib.net/). Michel Pelletier and Chimezie Ogbuji added an SPARQL Language parser, too, yielding a SPARQL implementation for Python.
* [OWL RL](https://github.com/RDFLib/OWL-RL) module on top of Pythons RDFLib. The function in the module calculates the Closure graph, following the specification of the [OWL 2 RL profile](http://www.w3.org/TR/owl2-profiles/#Reasoning_in_OWL_2_RL_and_RDF_Graphs_using_Rules). It is also available on [pip](https://pypi.org/project/owlrl/). At some point, the package's maintenance has been taken up by [Nicholas Car](https://github.com/nicholascar)
* [Graph Visualization Framework (GVF)](http://gvf.sourceforge.net/), also referred here and there as “Royere”, developed with Scott Marshall and Guy Melançon. It is currently at SourceForge, and it has gone its own way by now…
