//
//  ViewController.swift
//  Jep
//
//  Created by Anant Singh on 8/16/22.
//

import UIKit

class ViewController: UIViewController {
    
    @IBOutlet var Categories: [QuestionLabel]!
    
    
    @IBOutlet var QuestionButtons: [QuestionButton]!
    
    @IBAction func onButtonTouch(_ sender: QuestionButton) {
    }
    
    let model = Model()
    override func viewDidLoad() {
        super.viewDidLoad()
        for i in 0..<Categories.count{
            Categories[i].text = model.load_cat
        }
        for (i, items) in Categories.enumerated() {
            items.ql_index = i
        }

        model.initBoard()
        
        // Do any additional setup after loading the view.
    }
    


}

