/*
 * our .tsx file have to explicitly import this or we will get
 * [11ty] Original error stack trace: ReferenceError: React is not defined
 */
import React from 'react';


/*
 * validate everything with Zod
 */
import { z } from 'zod';
export type  DataItems = z.infer<typeof DataItems>;
export const DataItems = z.string().array()

export const Items =
  ({ items }:{ items: DataItems }): JSX.Element =>
{
  return (
    <div>
      {
	DataItems
	.parse(items)
	.map( i => <p key={ i }>{ i }</p> )
      }
    </div>
  );
};
