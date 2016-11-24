""" Custom viewlets
"""
from plone.app.layout.viewlets import common
from Products.Five.browser.pagetemplatefile import ViewPageTemplateFile


class Banner(common.ViewletBase):
    """ Custom viewlet
    """
    render = ViewPageTemplateFile('../templates/banner.pt')

class Footer(common.ViewletBase):
    """ Custom footer portlet
    """
    render = ViewPageTemplateFile('../templates/footer.pt')

class Logo2(common.ViewletBase):
    """ Custom footer portlet
    """
    render = ViewPageTemplateFile('../templates/logo2.pt')
