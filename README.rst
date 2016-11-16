========
df.theme
========

Deutsche Flagge Theme

Features
========

- Deutsche Flagge Diazo Theme


Installation
============

* Install **df.theme** by adding it to your buildout and then running ``bin/buildout``::

    [buildout]

    ...

    eggs =
        df.theme


* Restart Plone::

    bin/instance restart

* Within Site **Setup > Add-ons** install **Plone Theme: Deutsche Flagge**

* See also the demo `Plone5 buildout <https://github.com/educorvi/df.theme/tree/master/buildouts/plone5>`_ within **buildouts** folder::

    $ git clone https://github.com/educorvi/df.theme.git
    $ cd df.theme/buildouts/plone5
    $ ./install.sh


Develop
=======

* Install **npm**::

    $ sudo apt-get install npm

* Install **grunt**::

    $ sudo npm install -g grunt-cli

* Locally install required **development tools** within **df.theme** root::

    $ git clone https://github.com/educorvi/df.theme.git
    $ cd df.theme
    $ npm install

* Locally install **theme dependencies**  within **Diazo Theme** folder::

    $ cd df.theme/src/df/theme/theme
    $ npm install

* Auto-compile theme on changes::

    $ grunt watch

* Start Plone in foreground::

    $ bin/instance fg

* Now you can start developing on this theme::

    $ cd df.theme/src/df/theme/theme
    $ vim less/deutscheflagge.less


Contribute
==========

- Issue Tracker: https://github.com/educorvi/df.theme/issues
- Source Code: https://github.com/educorvi/df.theme
