""" Custom viewlets
"""
from plone.app.layout.viewlets import common
from Products.Five.browser.pagetemplatefile import ViewPageTemplateFile


class Banner(common.ViewletBase):
    """ Custom viewlet
    """
    render = ViewPageTemplateFile('../templates/banner.pt')
