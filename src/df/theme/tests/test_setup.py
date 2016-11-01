# -*- coding: utf-8 -*-
"""Setup tests for this package."""
from plone import api
from df.theme.testing import DF_THEME_INTEGRATION_TESTING  # noqa

import unittest


class TestSetup(unittest.TestCase):
    """Test that df.theme is properly installed."""

    layer = DF_THEME_INTEGRATION_TESTING

    def setUp(self):
        """Custom shared utility setup for tests."""
        self.portal = self.layer['portal']
        self.installer = api.portal.get_tool('portal_quickinstaller')

    def test_product_installed(self):
        """Test if df.theme is installed."""
        self.assertTrue(self.installer.isProductInstalled(
            'df.theme'))

    def test_browserlayer(self):
        """Test that IDfThemeLayer is registered."""
        from df.theme.interfaces import (
            IDfThemeLayer)
        from plone.browserlayer import utils
        self.assertIn(IDfThemeLayer, utils.registered_layers())


class TestUninstall(unittest.TestCase):

    layer = DF_THEME_INTEGRATION_TESTING

    def setUp(self):
        self.portal = self.layer['portal']
        self.installer = api.portal.get_tool('portal_quickinstaller')
        self.installer.uninstallProducts(['df.theme'])

    def test_product_uninstalled(self):
        """Test if df.theme is cleanly uninstalled."""
        self.assertFalse(self.installer.isProductInstalled(
            'df.theme'))

    def test_browserlayer_removed(self):
        """Test that IDfThemeLayer is removed."""
        from df.theme.interfaces import \
            IDfThemeLayer
        from plone.browserlayer import utils
        self.assertNotIn(IDfThemeLayer, utils.registered_layers())
