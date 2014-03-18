// TodoApp Templates Module
// -----------------------------

// This module has exported provider functions that obtain template
// sources from the host page and compile them into LoDash templates.
// Other parts of the application can then just have template injected.

// We need the `Provide` annotation from the DI framework
import {Provide} from './di/annotations';

// The token of this dependency is the string `'itemTemplate'`.
@Provide('itemTemplate')
export function createItemTemplate() {
  return _.template($('#item-template').html());
}

@Provide('statsTemplate')
export function createStatsTemplate() {
  return _.template($('#stats-template').html());
}