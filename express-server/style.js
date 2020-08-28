function infIfNeg1(inp) {
  if (inp === -1) {
    return Infinity;
  } else {
    return inp;
  }
}

function javaStyle(input, generated) {
  input = input.replace(/\s+$/, '');
  let inpLen = input.length;
  let tok = '\n';
  let idx = input.lastIndexOf(tok);
  idx += tok.length;
  tok = '\t';
  let indent = 0;
  while (idx + tok.length <= inpLen) {
    if (input.substring(idx, idx + tok.length) === tok) {
      indent++;
    } else {
      break;
    }
    idx += tok.length;
  }
  let styled = '';
  let skipNewline = false;
  if (input.endsWith('}')) {
    //noop
  } else if (input.endsWith('{')) {
    indent++;
  } else if (input.endsWith(';')) {
    //noop
  } else {
    skipNewline = true;
  }
  while (generated.length > 0) {
    let idxS = infIfNeg1(generated.indexOf(';'));
    let idxCo = infIfNeg1(generated.indexOf('{'));
    let idxCc = infIfNeg1(generated.indexOf('}'));
    let prevIndent = indent;
    if (idxS < idxCo && idxS < idxCc) {
      idx = idxS;
    } else if (idxCo < idxS && idxCo < idxCc) {
      idx = idxCo;
      indent++;
    } else if (idxCc < idxS && idxCc < idxCo) {
      idx = idxCc;
      indent--;
      if (indent < 0) {
        indent = 0;
      }
    } else {
      idx = generated.length;
    }
    if (generated.startsWith('}')) {
      prevIndent--;
      if (prevIndent < 0) {
        prevIndent = 0;
      }
    }
    if (skipNewline) {
      skipNewline = false;
    } else {
      styled += '\n';
      for (i = 0; i < prevIndent; i++) {
        styled += '\t';
      }
    }
    styled += generated.substring(0, idx + 1);
    generated = generated.substring(idx + 1).trim();
  }
  return styled;
}

module.exports = {
  javaStyle: javaStyle
};
