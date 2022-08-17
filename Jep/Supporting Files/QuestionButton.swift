//
//  QuestionButton.swift
//  Jep
//
//  Created by Anant Singh on 8/16/22.
//

import Foundation
import UIKit


class QuestionButton: UIButton {
    
    //Button representation for the Jeopardy Board.
    var qb_index = 0
    override func layoutSubviews() {
        super.layoutSubviews()
        titleLabel?.numberOfLines = 0
        titleLabel?.adjustsFontSizeToFitWidth = true
    }

}
