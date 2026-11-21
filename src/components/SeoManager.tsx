/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useLocation, useParams } from "react-router-dom";
import { LanguageCode } from "../types";
import { usePageSeo } from "../hooks/usePageSeo";

interface Props {
  language: LanguageCode;
}

export default function SeoManager({ language }: Props) {
  const { pathname } = useLocation();
  const { projectId } = useParams();
  usePageSeo({ language, pathname, projectId });
  return null;
}