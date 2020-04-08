/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */

import {CellError, ErrorType, InternalCellValue, SimpleCellAddress} from '../../Cell'
import {ProcedureAst} from '../../parser'
import {FunctionPlugin} from './FunctionPlugin'

export class RandomPlugin extends FunctionPlugin {
  public static implementedFunctions = {
    rand: {
      translationKey: 'RAND',
      isVolatile: true,
    },
  }

  /**
   * Corresponds to RAND()
   *
   * Returns a pseudo-random floating-point random number
   * in the range [0,1).
   *
   * @param ast
   * @param formulaAddress
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public rand(ast: ProcedureAst, formulaAddress: SimpleCellAddress): InternalCellValue {
    if (ast.args.length !== 0) {
      return new CellError(ErrorType.NA)
    } else {
      return Math.random()
    }
  }
}
