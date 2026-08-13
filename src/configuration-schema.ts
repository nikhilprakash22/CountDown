/*!
 * Copyright 2026, Staffbase SE and contributors.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { UiSchema } from "@rjsf/utils";
import { JSONSchema7 } from "json-schema";

/**
 * schema used for generation of the configuration dialog
 * see https://rjsf-team.github.io/react-jsonschema-form/docs/ for documentation
 */
export const configurationSchema: JSONSchema7 = {
  type: "object",
   properties: {
    enddate: {
      type: "string",
      format: "date",
      title: "Event Date",
   },
language: {
  type: "string",
  title: "Language",
  enum: ["en", "fr", "de", "es", "hi", "zh", "hu","pl","ptbr","sk"]
},

bg: {
type: "string",
title: "Background Image",
enum: ["beach", "mountain", "city", "none"]

},
customImage: {
type: "string",
title: "Upload Image From PC"
}
   }
  };

  /* message: {
    type: "string",
    title: "Days",
  },
  messages: {
    type: "string",
    title: "Hours",
  },
  messagess: {
    type: "string",
    title: "Minutes",
  },
  messagesss: {
    type: "string",
    title: "Seconds",
  },*/
 // },
//}; 

/**
 * schema to add more customization to the form's look and feel
 * @see https://rjsf-team.github.io/react-jsonschema-form/docs/api-reference/uiSchema
 */
export const uiSchema: UiSchema = {
  enddate: {
    "ui:help": "Enter a date in Unix date format.",
  },
  bg: {

"ui:help": "Select a background image."

},
customImage: {
"ui:widget": "file"
},
  message: {
    "ui:help": "Please enter text Days to show in respective language",
  },
  messages: {
    "ui:help": "Please enter text Hours to show in respective language",
  },
  messagess: {
    "ui:help": "Please enter text Minutes to show in respective language",
  },
  messagesss: {
    "ui:help": "Please enter text Seconds to show in respective language",
  },
};
