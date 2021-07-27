import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'
import { SlidesControl, SlidesPreview } from "./Slides";

import InfoPagePreview from './preview-templates/InfoPagePreview'
import WorkPostPreview from './preview-templates/WorkPostPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)
CMS.registerWidget("slides", SlidesControl, SlidesPreview);

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('info', InfoPagePreview)
CMS.registerPreviewTemplate('work', WorkPostPreview)
