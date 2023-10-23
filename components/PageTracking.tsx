import React from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faFolder,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { Tracking } from "../types/pageTracking";

export function PageTracking(props: Tracking) {
  const { pass, pageTitle, articleTitle, articlePass } = props;

  return (
    <div className="py-3 pl-3 bg-gray-200">
      <Link href="/" legacyBehavior>
        <a className="mr-3 text-sm hover:underline">
          <FontAwesomeIcon size="sm" icon={faHome} className="mr-1" />
          TOP
        </a>
      </Link>
      <FontAwesomeIcon size="sm" icon={faAngleRight} />
      <Link href={`/${pass}`} legacyBehavior>
        <a className="ml-3 text-sm hover:underline">
          <FontAwesomeIcon size="sm" icon={faFolder} className="mr-1" />
          {pageTitle}
        </a>
      </Link>
      {articleTitle == null ? null : (
        <>
          <FontAwesomeIcon size="sm" icon={faAngleRight} className="ml-3" />
          <Link href={`/${pass}/${articlePass}`} legacyBehavior>
            <a className="ml-3 text-sm hover:underline">
              <FontAwesomeIcon size="sm" icon={faFolder} className="mr-1" />
              {articleTitle}
            </a>
          </Link>
        </>
      )}
    </div>
  );
}
