# -*- coding: utf-8 -*-
from plone.app.contenttypes.testing import PLONE_APP_CONTENTTYPES_FIXTURE
from plone.app.robotframework.testing import REMOTE_LIBRARY_BUNDLE_FIXTURE
from plone.app.testing import applyProfile
from plone.app.testing import FunctionalTesting
from plone.app.testing import IntegrationTesting
from plone.app.testing import PloneSandboxLayer
from plone.testing import z2

import df.theme


class DfThemeLayer(PloneSandboxLayer):

    defaultBases = (PLONE_APP_CONTENTTYPES_FIXTURE,)

    def setUpZope(self, app, configurationContext):
        # Load any other ZCML that is required for your tests.
        # The z3c.autoinclude feature is disabled in the Plone fixture base
        # layer.
        self.loadZCML(package=df.theme)

    def setUpPloneSite(self, portal):
        applyProfile(portal, 'df.theme:default')


DF_THEME_FIXTURE = DfThemeLayer()


DF_THEME_INTEGRATION_TESTING = IntegrationTesting(
    bases=(DF_THEME_FIXTURE,),
    name='DfThemeLayer:IntegrationTesting'
)


DF_THEME_FUNCTIONAL_TESTING = FunctionalTesting(
    bases=(DF_THEME_FIXTURE,),
    name='DfThemeLayer:FunctionalTesting'
)


DF_THEME_ACCEPTANCE_TESTING = FunctionalTesting(
    bases=(
        DF_THEME_FIXTURE,
        REMOTE_LIBRARY_BUNDLE_FIXTURE,
        z2.ZSERVER_FIXTURE
    ),
    name='DfThemeLayer:AcceptanceTesting'
)
