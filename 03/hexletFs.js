import path from 'path';
import Tree from 'hexlet-trees';

// BEGIN (write your solution here)
const getPathParts = filepath =>
  filepath.split(path.sep).filter(part => part !== '');
// END

export default class {
  constructor() {
    this.tree = new Tree('/', { type: 'dir' });
  }

  // BEGIN (write your solution here)
  touchSync(filepath) {
    const { dir, base } = path.parse(filepath);
    return this.findNode(dir).addChild(base, { type: 'file' });
  }

  isFile(filepath) {
    // const parts = getPathParts(filepath);
    // const current = this.tree.getDeepChild(parts);
    const current = this.findNode(filepath);
    return current && current.getMeta().type === 'file';
  }

  mkdirSync(filepath) {
    const { dir, base } = path.parse(filepath);
    return this.findNode(dir).addChild(base, { type: 'dir' });
  }

  isDirectory(filepath) {
    // const parts = getPathParts(filepath);
    // const current = this.tree.getDeepChild(parts);
    const current = this.findNode(filepath);
    return current && current.getMeta().type === 'dir';
  }
  // END

  findNode(filepath) {
    const parts = getPathParts(filepath);
    return parts.length === 0 ? this.tree : this.tree.getDeepChild(parts);
  }
}
