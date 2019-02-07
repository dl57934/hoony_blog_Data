package drawer;

import command.*;

import java.awt.*;

public class DrawCanvas extends Canvas implements Drawable{
	private final Color color = Color.red;
	private final int RADIUS = 6;
	private MacroCommand history;

	public DrawCanvas(int width, int height, MacroCommand history){
		setSize(width, height);
		setBackground(Color.white);
		this.history = history;
	}

	public void paint(Graphics g){
		history.execute();
	}

	public void draw(int x, int y){
		Graphics g = getGraphics();
		g.setColor(color);
		g.fillOval(x-RADIUS, y-RADIUS, RADIUS*2, RADIUS*2);
	}
}