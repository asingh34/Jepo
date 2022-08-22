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
        model.initBoard()
        
        // Do any additional setup after loading the view.
    }
    


}

